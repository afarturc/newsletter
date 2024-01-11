class Menu < ApplicationRecord
  has_many :specialities, dependent: :destroy

  def publish
    update(published: true, schedule: false)
  end
end
