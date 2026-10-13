
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const schema = z.object({
  business: z.string().trim().min(1).max(120),
  dba: z.string().max(120).optional().default(''),
  entityType: z.string().max(60).optional().default(''),
  businessAddress: z.string().max(160).optional().default(''),
  city: z.string().max(80).optional().default(''),
  state: z.string().max(40).optional().default(''),
  zip: z.string().max(15).optional().default(''),
  industry: z.string().max(100).optional().default(''),
  yearsInBusiness: z.string().max(30).optional().default(''),
  ownership: z.string().max(10).optional().default(''),

  name: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(5).max(30),
  email: z.email().max(254),

  revenue: z.string().max(50).optional().default(''),
  amount: z.string().max(30).optional().default(''),
  purpose: z.string().max(80).optional().default(''),
  existingAdvances: z.string().max(30).optional().default(''),
  weeklyPayments: z.string().max(40).optional().default(''),
  message: z.string().max(1000).optional().default(''),

  consent: z.literal('yes'),
  website: z.string().optional().default('')
}).strict();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Please check the form fields.' },
        { status: 400 }
      );
    }

    const lead = parsed.data;

    if (lead.website) {
      return NextResponse.json({ ok: true });
    }

    const key = process.env.RESEND_API_KEY;
    const from = process.env.LEAD_FROM_EMAIL;
    const to = process.env.LEAD_TO_EMAIL;

    if (!key || !from || !to) {
      return NextResponse.json(
        { error: 'Inquiry form is not yet configured.' },
        { status: 503 }
      );
    }

    const fields = [
      ['Legal Business Name', lead.business],
      ['DBA / Trade Name', lead.dba],
      ['Entity Type', lead.entityType],
      ['Business Address', lead.businessAddress],
      ['City', lead.city],
      ['State', lead.state],
      ['ZIP Code', lead.zip],
      ['Industry', lead.industry],
      ['Years in Business', lead.yearsInBusiness],
      ['Ownership Percentage', lead.ownership],
      ['Owner / Contact Name', lead.name],
      ['Phone', lead.phone],
      ['Email', lead.email],
      ['Monthly Revenue', lead.revenue],
      ['Financing Requested', lead.amount],
      ['Financing Purpose', lead.purpose],
      ['Existing MCA Positions', lead.existingAdvances],
      ['Weekly Financing Payments', lead.weeklyPayments],
      ['Additional Information', lead.message],
      ['Consent to Contact', 'Yes']
    ];

    const bodyText = fields
      .map(([label, value]) => `${label}: ${value}`)
      .join('\n');

    const result = await new Resend(key).emails.send({
      from,
      to,
      subject: 'New Grandwell Capital Merchant Application',
      text: bodyText,
      replyTo: lead.email
    });

    if (result.error) {
      console.error('Resend delivery failed:', result.error.name);

      return NextResponse.json(
        { error: 'Unable to deliver your application.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Application submission error:', error);

    return NextResponse.json(
      { error: 'Unable to process application.' },
      { status: 400 }
    );
  }
}
