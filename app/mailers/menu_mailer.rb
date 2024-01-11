class MenuMailer < ApplicationMailer
    def menus_email
    @menus = params[:menus]
    @subscriber = params[:subscriber]

    mail(
      to: @subscriber.email,
      subject: "#{Time.now.strftime('%d/%m/%Y')} Local Menu"
    ) do |format|
      format.text { render plain:'menus_email'}
    end
  end
end
