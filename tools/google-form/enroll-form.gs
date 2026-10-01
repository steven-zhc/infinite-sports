/**
 * Infinite Sports — Enrollment Google Form generator
 *
 * How to use (signed in as infinite.sports.admin@gmail.com):
 *   1. Open https://script.google.com → New project.
 *   2. Replace the default code with this whole file and save.
 *   3. Select `createEnrollmentForm` in the toolbar and click Run.
 *      Approve the permission prompt the first time.
 *   4. Open View → Logs (Execution log) to copy the form, edit and sheet links.
 *
 * Running it again creates a NEW form; delete old copies in Google Drive.
 * Text marked [PLACEHOLDER] / [DRAFT] should be reviewed before going live.
 */

const CONFIG = {
  adminEmail: 'infinite.sports.admin@gmail.com',
  formTitle: 'Infinite Sports — Enrollment Form',
  sheetTitle: 'Infinite Sports — Enrollment Responses',
  sendParentConfirmation: true, // auto-reply email to the parent after they submit
  programs: ['Volleyball', 'Basketball', 'Core Training'],
  // [PLACEHOLDER] Replace with real class times once the schedule is set.
  availability: [
    'Weekday afternoons (after school, 4–6 pm)',
    'Weekday evenings (6–8 pm)',
    'Saturday',
    'Sunday',
  ],
};

// Question titles reused by the notification handler.
const Q = {
  parentName: 'Parent / guardian full name',
  parentEmail: 'Parent / guardian email',
  parentPhone: 'Parent / guardian phone',
  athleteName: 'Athlete full name',
  athleteDob: 'Athlete date of birth',
  programs: 'Which program(s) are you interested in?',
};

function createEnrollmentForm() {
  const form = FormApp.create(CONFIG.formTitle)
    .setDescription(
      'Thank you for your interest in Infinite Sports! Please complete one form per athlete. ' +
      'We will contact you within 2 business days to confirm class placement, schedule, and fees.\n\n' +
      'Questions? Email ' + CONFIG.adminEmail + '.'
    )
    .setProgressBar(true)
    .setAllowResponseEdits(false)
    .setShowLinkToRespondAgain(true)
    .setConfirmationMessage(
      'Thank you! We have received your registration. ' +
      'Our team will reach out within 2 business days to confirm the next steps.'
    );

  const emailValidation = FormApp.createTextValidation()
    .setHelpText('Please enter a valid email address.')
    .requireTextIsEmail()
    .build();
  const phoneValidation = FormApp.createTextValidation()
    .setHelpText('Please enter a valid phone number.')
    .requireTextMatchesPattern('^[+0-9()\\-\\s.]{7,20}$')
    .build();

  // ---- 1. Parent / guardian ----
  form.addSectionHeaderItem().setTitle('Parent / Guardian');
  form.addTextItem().setTitle(Q.parentName).setRequired(true);
  form.addTextItem().setTitle(Q.parentEmail).setRequired(true).setValidation(emailValidation);
  form.addTextItem().setTitle(Q.parentPhone).setRequired(true).setValidation(phoneValidation);
  form.addMultipleChoiceItem()
    .setTitle('Preferred contact method')
    .setChoiceValues(['Email', 'Phone call', 'Text message', 'WeChat'])
    .showOtherOption(true);

  // ---- 2. Athlete ----
  form.addPageBreakItem().setTitle('Athlete Information');
  form.addTextItem().setTitle(Q.athleteName).setRequired(true);
  form.addDateItem().setTitle(Q.athleteDob).setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Gender')
    .setChoiceValues(['Female', 'Male', 'Prefer not to say'])
    .showOtherOption(true);
  form.addListItem()
    .setTitle('Current grade')
    .setChoiceValues(['Pre-K / K', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th',
      '9th', '10th', '11th', '12th'])
    .setRequired(true);
  form.addTextItem().setTitle('School (optional)');

  // ---- 3. Program ----
  form.addPageBreakItem().setTitle('Program Selection');
  form.addCheckboxItem()
    .setTitle(Q.programs)
    .setChoiceValues(CONFIG.programs)
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Experience level')
    .setChoiceValues([
      'New to the sport',
      'Some experience (rec league / PE / casual play)',
      'Experienced (school team / club team)',
    ])
    .setRequired(true);
  form.addCheckboxItem()
    .setTitle('Which times usually work for you?')
    .setHelpText('Final class times will be confirmed by our team.')
    .setChoiceValues(CONFIG.availability)
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('What would your athlete like to work on?')
    .setHelpText('Goals, skills to improve, upcoming tryouts, etc.');

  // ---- 4. Health & emergency ----
  form.addPageBreakItem().setTitle('Health & Emergency Contact');
  form.addParagraphTextItem()
    .setTitle('Allergies, medical conditions, injuries, or medications')
    .setHelpText('Write "None" if not applicable.')
    .setRequired(true);
  form.addTextItem().setTitle('Emergency contact name').setHelpText('Someone other than the parent above, if possible.').setRequired(true);
  form.addTextItem().setTitle('Emergency contact relationship').setRequired(true);
  form.addTextItem().setTitle('Emergency contact phone').setRequired(true).setValidation(phoneValidation);

  // ---- 5. Agreements ----  [DRAFT] — have the final wording reviewed by a qualified professional.
  form.addPageBreakItem().setTitle('Agreements');
  form.addCheckboxItem()
    .setTitle('Assumption of risk & release of liability')
    .setHelpText(
      '[DRAFT] I understand that participation in sports and physical training involves inherent risks, ' +
      'including the risk of injury. I voluntarily allow my child to participate and release Infinite Sports, ' +
      'its coaches, staff, and facility from liability for injuries arising from ordinary participation, ' +
      'to the extent permitted by law.'
    )
    .setChoiceValues(['I have read and agree'])
    .setRequired(true);
  form.addCheckboxItem()
    .setTitle('Emergency medical authorization')
    .setHelpText(
      '[DRAFT] In an emergency, if I cannot be reached, I authorize Infinite Sports staff to seek ' +
      'medical treatment for my child. I am responsible for any resulting medical costs.'
    )
    .setChoiceValues(['I have read and agree'])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Photo & video consent')
    .setHelpText(
      'Infinite Sports may take photos or videos during training for use on our website and social media.'
    )
    .setChoiceValues([
      'Yes, I give permission',
      'No, please do not feature my child',
    ])
    .setRequired(true);
  form.addTextItem()
    .setTitle('Parent / guardian signature')
    .setHelpText('Type your full name to sign electronically.')
    .setRequired(true);

  // ---- 6. Other ----
  form.addPageBreakItem().setTitle('Almost done');
  form.addMultipleChoiceItem()
    .setTitle('How did you hear about us?')
    .setChoiceValues(['Friend / family', 'School', 'Google search', 'Instagram', 'Facebook', 'WeChat', 'Flyer'])
    .showOtherOption(true);
  form.addParagraphTextItem().setTitle('Anything else we should know?');

  // Responses → Google Sheet
  const sheet = SpreadsheetApp.create(CONFIG.sheetTitle);
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  // Email notification on every submission (replace any trigger from an earlier run)
  ScriptApp.getProjectTriggers()
    .filter((t) => t.getHandlerFunction() === 'onEnrollmentSubmit')
    .forEach((t) => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('onEnrollmentSubmit').forForm(form).onFormSubmit().create();

  const publicUrl = form.getPublishedUrl();
  let shortUrl = publicUrl;
  try { shortUrl = form.shortenFormUrl(publicUrl); } catch (e) { /* keep long URL */ }

  Logger.log('Form link (put this on the website): ' + shortUrl);
  Logger.log('Full form link: ' + publicUrl);
  Logger.log('Edit form: ' + form.getEditUrl());
  Logger.log('Responses sheet: ' + sheet.getUrl());
}

/** Installable trigger: emails the admin (and optionally the parent) on each submission. */
function onEnrollmentSubmit(e) {
  const answers = {};
  const lines = [];
  e.response.getItemResponses().forEach((ir) => {
    const title = ir.getItem().getTitle();
    const value = Array.isArray(ir.getResponse()) ? ir.getResponse().join(', ') : String(ir.getResponse());
    answers[title] = value;
    lines.push(title + ':\n  ' + value);
  });

  const athlete = answers[Q.athleteName] || 'New athlete';
  const programs = answers[Q.programs] || '';
  const parentEmail = answers[Q.parentEmail];

  MailApp.sendEmail({
    to: CONFIG.adminEmail,
    replyTo: parentEmail || CONFIG.adminEmail,
    subject: 'New enrollment: ' + athlete + (programs ? ' — ' + programs : ''),
    body: 'A new enrollment form was submitted on ' + e.response.getTimestamp() + '.\n\n' + lines.join('\n\n'),
  });

  if (CONFIG.sendParentConfirmation && parentEmail) {
    MailApp.sendEmail({
      to: parentEmail,
      replyTo: CONFIG.adminEmail,
      name: 'Infinite Sports',
      subject: 'We received your enrollment for ' + athlete,
      body:
        'Hi ' + (answers[Q.parentName] || '') + ',\n\n' +
        'Thank you for registering ' + athlete + ' with Infinite Sports' +
        (programs ? ' (' + programs + ')' : '') + '.\n' +
        'Our team will contact you within 2 business days to confirm class placement, schedule, and fees.\n\n' +
        'If you have any questions, just reply to this email.\n\n' +
        'Infinite Sports\nTrain with purpose. Grow without limits.',
    });
  }
}
