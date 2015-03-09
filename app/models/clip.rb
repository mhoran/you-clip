class Clip
  include ActiveModel::Model

  attr_accessor :video_id

  validates :url, format: { with: /youtube\.com\/watch\?v/ }

  def initialize(attributes = {})
    self.url = attributes[:url]
  end

  def url=(url)
    @video_id = Rack::Utils.parse_query(URI(url).query)['v']
  end

  def url
    if @video_id
      "https://www.youtube.com/watch?v=#{@video_id}"
    end
  end
end
