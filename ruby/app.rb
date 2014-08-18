require 'nokogiri'
require 'open-uri'
require 'uri'
require 'pry'
require 'twitter'

URL = "http://localhost:8000"

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = "1SZXm4zrXgyeIWkie2c6iMhVz"
  config.consumer_secret     = "mh49pG3yy1xMaRWTvZeNj9vKjM37ytV1cSozVmmbBZFCDOXC2F"
  config.access_token        = "342173739-qEEtBLvsgXlk7ruUUPu8mxK122eI7nfcFQ6vRs5A"
  config.access_token_secret = "xTnhxs7RxgJz7oeDIEcGA7iLAlSzzx9LAujMNqWRDi7Os"
end


def make_absolute( href, root )
  URI.parse(root).merge(URI.parse(href)).to_s
end

pic = Nokogiri::HTML(open(URL)).xpath("//img/@src").first do |src|
  uri = make_absolute(src,URL)
  File.open(File.basename(uri),'wb'){ |f| f.write(open(uri)) }
end

image = "http://placekitten.com/300/300"
binding.pry
client.update_with_media("When dogs attack!", "media[#{image}]",)

out_file = File.new("http://placekitten.com/300/300")
