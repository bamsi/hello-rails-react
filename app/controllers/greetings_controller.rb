# frozen_string_literal: true

class GreetingsController < ApplicationController
  def index
    count = Greeting.count
    random_offset = rand(count)
    @greeting = Greeting.offset(random_offset).first
  end
end
