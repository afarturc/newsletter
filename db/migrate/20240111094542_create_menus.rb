class CreateMenus < ActiveRecord::Migration[7.1]
  def change
    create_table :menus do |t|
      t.datetime :publish_date
      t.string :restaurant
      t.string :string
      t.boolean :published

      t.timestamps
    end
  end
end
