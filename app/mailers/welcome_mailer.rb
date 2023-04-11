class WelcomeMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.welcome_mailer.send_greeting.subject
  #
  def send_greeting(user)
    @user = user

    mail to: @user.email, subject: "Thanks for Signing Up"
  end
end
