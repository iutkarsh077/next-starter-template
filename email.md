- Implement a email functionality in Form-Submission app


- Foolowing this blog - https://medium.com/@this.jiyun/how-to-send-emails-in-next-js-with-nodemailer-gmail-using-typescript-52aeea4e640a

Step 1 - Get a App password from Gmail app password section
Step 2 - Came across nodemailer (npm i nodemailer)
Step 3 - Made a file SendEmail.ts and imported nodemailer package in it
Step 4 - Setup the transporter in nodemailer
Step 5 - Make a  async call to sendEmail function with user data



Errors - 
1. Typescript error for nodemailer installed npm i @types/nodemailer(then fixed)

2. Only plain objects can be passed to Client Components from Server Components. Objects with toJSON methods are not supported. Convert it manually to a simple value before passing it to props.
  [{$__: ..., $isNew: false, _doc: ...}, ..., ..., ..., ...]
Solution - The _id is causing the issue , first solution of this stack overflow works - https://stackoverflow.com/questions/77091418/warning-only-plain-objects-can-be-passed-to-client-components-from-server-compo
