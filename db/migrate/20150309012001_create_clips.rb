class CreateClips < ActiveRecord::Migration
  def change
    create_table :clips do |t|
      t.string :video_id
      t.integer :in_point
      t.integer :out_point
      t.timestamps
    end
  end
end
