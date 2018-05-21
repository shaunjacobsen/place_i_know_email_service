![logo](https://res.cloudinary.com/placeiknow/image/upload/c_scale,w_200/v1503588668/logo_shhvcy.png)
# Email Microservice

This microservice accepts messages from a RabbitMQ broker with queue name "emails".

## Accepted Messages

**Enqueue Forgot Password Email**

```javascript
{
  subs: {
    reset_token: STRING,
    reset_id: INTEGER
    },
  template: 'FORGOT_PASSWORD',
  user: {
    profile_id: INTEGER,
    email: STRING,
    first_name: STRING,
  },
}
```
Enqueues the "forgot password" email template for the specified user. `user` object must include the `profile_id`, `email`, and `first_name` attributes. `subs` object must include the unencrpyted `reset_token` used to allow password reset, and the `reset_id` from the database.

Email will be sent using the Sparkpost SDK.

Currently used:
- When a user has forgotten their password and needs to reset it.

## Copyright
&copy; 2018 Shaun Jacobsen. All Rights Reserved.