class RemoveStringFromMenu < ActiveRecord::Migration[7.1]
  def change
    remove_column :menus, :string
    change_column_default :menus, :published, false
  end
end
