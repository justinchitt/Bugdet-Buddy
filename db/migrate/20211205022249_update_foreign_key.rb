class UpdateForeignKey < ActiveRecord::Migration[6.1]
  def change
     # remove the old foreign_key
     remove_foreign_key :budgets, :users

     # add the new foreign_key
     add_foreign_key :budgets, :users, on_delete: :cascade
   end
end
