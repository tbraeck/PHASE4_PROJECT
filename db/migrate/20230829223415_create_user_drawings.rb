class CreateUserDrawings < ActiveRecord::Migration[7.0]
  def change
    create_table :user_drawings do |t|
      t.string :adjective
      t.string :noun
      t.string :verb
      t.string :adverb
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
