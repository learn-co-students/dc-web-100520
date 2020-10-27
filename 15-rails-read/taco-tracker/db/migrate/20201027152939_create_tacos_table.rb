class CreateTacosTable < ActiveRecord::Migration[6.0]
  def change
    create_table :tacos do |t|
      t.string :name
      t.boolean :vegetarian
      t.float :price
    end
  end
end
