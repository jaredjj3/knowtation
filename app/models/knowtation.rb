# == Schema Information
#
# Table name: knowtations
#
#  id                          :integer          not null, primary key
#  title                       :string           not null
#  user_id                     :integer          not null
#  scroll_instructions         :text
#  created_at                  :datetime         not null
#  updated_at                  :datetime         not null
#  video_url                   :text
#  notation_image_file_name    :string
#  notation_image_content_type :string
#  notation_image_file_size    :integer
#  notation_image_updated_at   :datetime
#  thumbnail_file_name         :string
#  thumbnail_content_type      :string
#  thumbnail_file_size         :integer
#  thumbnail_updated_at        :datetime
#
NOTATION2 = [
  "app/assets/images/notation/notation1.jpg",
  "app/assets/images/notation/notation2.jpg",
  "app/assets/images/notation/notation3.jpg",
  "app/assets/images/notation/notation4.jpg",
  "app/assets/images/notation/notation5.jpg",
  "app/assets/images/notation/notation6.jpg"
]

IMAGES2 =[
  "app/assets/images/thumbnails/0001_samblakelock_happy-birthday_thumb.jpg",
  "app/assets/images/thumbnails/0002_samblakelock_colorful_neo-soul_thumb.jpg",
  "app/assets/images/thumbnails/0003_samblakelock_soulful-c_thumb.jpg",
  "app/assets/images/thumbnails/0004_samblakelock_instantnotation_thumb.jpg",
  "app/assets/images/thumbnails/0005_samblakelock_easy-neo-soul_thumb.jpg",
  "app/assets/images/thumbnails/0006_samblakelock_dm-neo-soul_thumb.jpg",
  "app/assets/images/thumbnails/0007_samblakelock_jingle-bells_thumb.jpg",
  "app/assets/images/thumbnails/0010_kappatanabe_suhr-gospel-chords_thumb.jpg",
  "app/assets/images/thumbnails/0011_johnmayertone_mayer-groove_thumb.jpg",
  "app/assets/images/thumbnails/0012_rodrigogouveia_neosoul-fusion_thumb.jpg",
  "app/assets/images/thumbnails/0013_FranciscoBaptista_portugal-neosoul_thumb.jpg",
  "app/assets/images/thumbnails/0014_LukeKennedyAiono_jazz-gospel-chords_thumb.jpg",
  "app/assets/images/thumbnails/0015_shanebarnes_ambient-improv_thumb.jpg",
  "app/assets/images/thumbnails/0016_shanebarnes_ambient-tele_thumb.jpg",
  "app/assets/images/thumbnails/0017_shanebarnes_ambient-ii-v-i_thumb.jpg",
  "app/assets/images/thumbnails/0018_jakecurran_stratocasting_thumb.jpg",
  "app/assets/images/thumbnails/0019_hannahmurphy_spanish-romance_thumb.jpg",
  "app/assets/images/thumbnails/0020_philgoldenberg_bach-fugue_thumb.jpg",
  "app/assets/images/thumbnails/0021_MichielStekelenburg_open-string_thumb.jpg",
  "app/assets/images/thumbnails/0022_MichielStekelenburg_straturday_thumb.jpg",
  "app/assets/images/thumbnails/0023_RCrossell_chord-scape_thumb.jpg",
  "app/assets/images/thumbnails/0024_DillanWitherow_amazing-stratocaster_thumb.jpg",
  "app/assets/images/thumbnails/0025_DillanWitherow_gravitas_thumb.jpg",
  "app/assets/images/thumbnails/0026_Kerry2smooth_prs-groove_thumb.jpg",
  "app/assets/images/thumbnails/0027_Kerry2smooth_acoustic-soul_thumb.jpg",
  "app/assets/images/thumbnails/0028_Kerry2smooth_slow-jam_thumb.jpg",
  "app/assets/images/thumbnails/0030_DanielDonato_bluegrass_thumb.jpg",
  "app/assets/images/thumbnails/0031_TaylorDearman_reverb_thumb.jpg",
  "app/assets/images/thumbnails/0035_CynthiaMaalouf_Chicken-Pickn-_thumb.jpg",
  "app/assets/images/thumbnails/0036_JoshMartin_pulloffs_splash.jpg",
  "app/assets/images/thumbnails/0042_ManeliJamal_acoustic-minimal_thumbnail.jpg",
  "app/assets/images/thumbnails/0043_CimFrodo_tides_thumb.jpg",
  "app/assets/images/thumbnails/0045_Walt-Druce_spain-ish_thumb.jpg",
  "app/assets/images/thumbnails/0047_Kristof_Clean-tone_thumb.jpg",
  "app/assets/images/thumbnails/0050_DannyMcKinnon_neo-soul-don_thumb.jpg",
  "app/assets/images/thumbnails/0051_eversonmenezes_jazz-fusion_thumb.jpg",
  "app/assets/images/thumbnails/0052_diegobaroza_epic-jazz-fusion_thumb.jpg",
  "app/assets/images/thumbnails/0053_zakkjones_gibson-groove_splash.jpg"
]

class Knowtation < ActiveRecord::Base
  validates :title, :user, :video_url, :notation_image, :thumbnail, presence: true

  belongs_to :user
  has_many :user_loops
  has_many :taggings
  has_many :tags, through: :taggings

  has_attached_file :notation_image, default_url: NOTATION2.sample
  validates_attachment_content_type :notation_image, content_type: /\Aimage\/.*\z/

  has_attached_file :thumbnail, default_url: IMAGES2.sample
  validates_attachment_content_type :thumbnail, content_type: /\Aimage\/.*\z/

  def received_loops
    self.user_loops.length
  end
end
