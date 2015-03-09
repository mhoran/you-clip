class ClipsController < ApplicationController
  def new
    @clip = Clip.new(url: 'https://www.youtube.com/watch?v=M7lc1UVf-VE')
  end

  def create
    @clip = Clip.new(clip_params)

    if @clip.valid?
      render :edit
    else
      render :new
    end
  end

  private

  def clip_params
    params.require(:clip).permit(:url)
  end
end
