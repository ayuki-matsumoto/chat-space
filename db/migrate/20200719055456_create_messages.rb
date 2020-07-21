class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.text :content
      t.string :image
      t.references :group, null: false, foreign_key: true
      t.references :user, null:false, foreign_key: true

      t.timestamps
    end
  end
end
