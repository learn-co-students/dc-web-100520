class MissionsController < ApplicationController
  def new

    @mission = Mission.new
  end

  def create 
    m = Mission.create(params.require(:mission).permit(:name, :scientist_id, :planet_id))
    redirect_to scientist_path(m.scientist.id)
  end
end
