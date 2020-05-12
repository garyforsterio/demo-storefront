require 'sinatra'
require 'sinatra/json'
require 'json'

set :bind, '0.0.0.0'
set :public_folder, File.dirname(__FILE__) + '/static'

before do
  headers 'Access-Control-Allow-Origin' => '*'
end

def applyRuntimeConfigurationToItem(item)
  modified = item.clone
  modified['image'] = "http://localhost:#{settings.port.to_s}/#{modified['image']}"
  modified
end

get '/items' do
  data = File.read('./json/all.json')
  response = JSON.load(data)

  response['data'] = response['data'].map(&method(:applyRuntimeConfigurationToItem))

  json response, content_type: :json
end

get '/items/:id' do
  idx = params['id'].to_i - 1

  data = File.read('./json/all.json')
  response = JSON.load(data)

  json applyRuntimeConfigurationToItem(response['data'][idx]), content_type: :json
end

get '/categories' do
  data = File.read('./json/categories.json')
  response = JSON.load(data)

  json response, content_type: :json
end

get '/not_found' do
  status 404
end
