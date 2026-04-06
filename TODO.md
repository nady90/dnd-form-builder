~~1. Responsive filter bar (Responsive main heading)~~
~~1. Responsive stats~~
~~4. AllFormsSection => map over 8 not data.~~
~~1. Make the buttons of the all forms section loading state disabled.~~
~~2. Make the storybook staticDirs cross-platform.~~
~~1. Add form dialog + zod + interaction tests + describe version of storybook.~~
~~2. Finish the rest of the action card variants.~~
~~1. Make the navbar responsive.~~

~~1. Make all your buttons take children not text props.~~
~~1. Tailwind brakpoints to storybook.~~
~~3. Re-write all the Inter Family tests in the metas to use a step function.~~

~~1. Implement the rest of the components~~

1. Remove the min-width of the info cards.
2. Internationalization. i18n + json (en, fr and ar).
3. Find out why the dialog overlay is too dark.
4. Toast when creating a new form.
5. Loading indicator when creating a new form..
6. Dialog form: Border of input when active
7. Change Action cards dialogs for the create template, import and ai.
8. Empty all forms section => Make the create form button popup a dialog.

---

2. Implement the two other tabs:
   a. Workflow: Email so and so when you are done.
   b. Permissions: Who can edit this survey? enter email.
3. Bug: Make two number inputs and change one, the other will change (I think it's because they have the same label)
4. The user can delete a selected element with the delete button.
5. The user shouldn't be able to select the text inside the buttons => iOS app like.
6. Stream the AI response.

7. PLAN:

   > How do I tell a tester where to find an uploaded file? You will find it in your dashboard (max 20 files per form)
   > Use only uploadthing for attachments and images:
   > Security - auth => userId => rate limiting.
   > Anybody can upload? Yes but each form can only have 20 files. &&&&&&&& Each use can only have 10 forms.
   > Check the properties tabs for all the elements specially the upload ones.

   > > > > > > > > > Add a password (Shadcn PIN) to access this form => Permissions
   > > > > > > > > > Permissions => Who can edit the form? Enter email invite like Figma.

   > > > > > > > > > Workflows => Expiring links
   > > > > > > > > > Workflows => Send an email (you submitted the form).
   > > > > > > > > > Workflows => Send an email (the user submitted to your form) => Send to multiple emails. (Rate limiting only 5 emails)
   > > > > > > > > > Workflows => Ask the user to rate the form.
   > > > > > > > > > Workflows => Generate PDF of the form => Download? Save online?

   > > > > > > > > > Rive video for workflows => New landing page section

// PLAN:
// CHANGE THE ROUTE TO /API/V1/AI
// 1. Finish the POST route that returns mock elements
// 2. Show a loader of these mock elements on the designer
// 3. Show the elements (isAiGenerated style) BUT with an animation
// 4. Exit animation for unaccepted results NO FOR ALL RESULTS.
// 5. Toast for accepted results => change them to look normal

// LATER:
// api user validation
// api return Zod Validation
// axios and data access layer and dto
// api handeling errors on the back and the front
