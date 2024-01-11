require 'sidekiq-scheduler'

class MenusPublishScheduler
  include Sidekiq::Worker

  def perform
    menus = Menu.where('publish_date < ?', Time.now)
                .where(published: false)

    menus.each do |menu|
      menu.publish
    end

    subscribers = Subscriber.all

    subscribers.each do |subscriber|
      MenuMailer.with(menus: menus, subscriber: subscriber).menus_email.deliver_now
    end
  end
end
