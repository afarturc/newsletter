Rails.application.configure do
  config.action_mailer.observers = %w[MenusPublishObserver]
end
