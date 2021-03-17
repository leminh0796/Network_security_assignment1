class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.text :ingredients, null: false
      t.text :instruction, null: false
      t.string :image, default: 'http://st.elohell.net/public/chill/3c06b98302ad38601b35b3ec255f670d.jpg'

      t.timestamps
    end
  end
end
