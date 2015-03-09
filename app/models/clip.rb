class Clip < ActiveRecord::Base
  validates :url, format: { with: /youtube\.com\/watch\?v/ }

  def url=(url)
    self.video_id = Rack::Utils.parse_query(URI(url).query)['v']
  end

  def url
    if video_id
      "https://www.youtube.com/watch?v=#{video_id}"
    end
  end

  def in_point
    super.presence || 0
  end

  def out_point
    super.presence || 0
  end
end
