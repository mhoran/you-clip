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
end
