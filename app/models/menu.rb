class Menu < ApplicationRecord
  has_many :specialities, dependent: :destroy

  def publish
    update(published: true)
  end

  accepts_nested_attributes_for :specialities
end
