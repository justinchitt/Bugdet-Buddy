class CreateMonths < ActiveRecord::Migration[6.1]
  def change
    create_table :months do |t|
      t.string :month
      t.string :year

      t.timestamps
    end
  end
end
