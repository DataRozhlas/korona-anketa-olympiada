library(jsonlite)
library(readr)
library(magick)
library(dplyr)

data <- read_csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vS-1CUz_ae22g4ZIV1s2jPpKCDm2wfdg1FZYXH6gRJn_8QY_bMKxdw_QXE_mo8dZh1AsgVnskXYFDDu/pub?gid=0&single=true&output=csv")

# ořízni fotky

for(i in data$f) {
  obr <- image_read(i)
  obr <- image_strip(obr)
  obr <- image_crop(obr, "201x201")
  obr <- image_resize(obr, "120")
  image_write(obr, paste0("../foto/", basename(i)), "jpg")
}

# udělej JSON

data <- data %>% select(1:8)
data$f <- basename(data$f)

write_json(data, path="../data/data.json", na="null")
