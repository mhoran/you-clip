class ClipsController < ApplicationController
  def new
    @clip = Clip.new(url: 'https://www.youtube.com/watch?v=M7lc1UVf-VE')
  end

  def create
    @clip = Clip.new(clip_params)

    if @clip.save
      redirect_to edit_clip_path(@clip.id)
    else
      render :new
    end
  end

  def edit
    @clip = Clip.find(params[:id])
  end

  private

  def clip_params
    params.require(:clip).permit(:url)
  end
end
