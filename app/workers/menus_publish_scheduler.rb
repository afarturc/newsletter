require 'sidekiq-scheduler'

class MenusPublishScheduler
  include Sidekiq::Worker

  def perform
    menus = Menu.where('publish_at < ?', Time.now)
                .where(published: false)
                .where(schedule: true)

    menus.each do |menu|
      menu.publish
    end

    subscribers = Subscriber.all

    subscribers.each do |subscriber|
      MenuMailer.with(menus: menus, subscriber: subscriber).new_post_email.deliver_now
    end
  end
end
