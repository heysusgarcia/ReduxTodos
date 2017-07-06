class Todo < ActiveRecord::Base
  validates :string, :text, presence: true
  validates :done, inclusion: {in [true, false] }
end
