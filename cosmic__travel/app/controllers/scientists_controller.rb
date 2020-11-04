class ScientistsController < ApplicationController
  
  def index
    @scientists = Scientist.all
  end

  def show
    id = params[:id]
    @scientist = Scientist.find(id)

  end

  def new
    @scientist = Scientist.new
  end

  def create 
    sci = Scientist.new(scientist_params)
    if sci.valid?
      sci.save
      redirect_to scientists_path
    else 
      @scientist = sci
      render :new 
    end
  end

  def edit
    @scientist = Scientist.find(params[:id])
  end

  def update
    @scientist = Scientist.find(params[:id])
    @scientist.update(scientist_params)
    redirect_to scientist_path(@scientist)
  end

  def destroy 
    @scientist = Scientist.find(params[:id])
    @scientist.delete
    redirect_to deleted_scientist_path	
  
  end

  def scientist_gone

    render :scientist_deleted
  end

  private 
  
  def scientist_params
    params.require(:scientist).permit(:name, :field_of_study)
  end

end
