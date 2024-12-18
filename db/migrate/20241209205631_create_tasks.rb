class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :string
      t.string :description
      t.string :text
      t.string :completed
      t.string :boolean
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
