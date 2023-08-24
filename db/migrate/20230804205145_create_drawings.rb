class CreateDrawings < ActiveRecord::Migration[7.0]
  def change
    create_table :drawings do |t|
      t.string :adjective
      t.string :noun
      t.string :verb
      t.string :adverb
      t.integer :user_id
      t.integer :category_id

      t.timestamps
    end
  end
end
