library(jsonlite)
library(readr)
library(magick)
library(dplyr)
library(stringi)

data <- read_csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vS-1CUz_ae22g4ZIV1s2jPpKCDm2wfdg1FZYXH6gRJn_8QY_bMKxdw_QXE_mo8dZh1AsgVnskXYFDDu/pub?gid=0&single=true&output=csv")

# ořízni fotky



for(i in list.files("../foto/")) {
  obr <- image_read(paste0("../foto/", i))
  obr <- image_strip(obr)
  obr <- image_resize(obr, "120")
  image_write(obr, paste0("../foto/", i), "jpg")
}


# udělej JSON

data$f <- stri_trans_general(tolower(paste0(data$j, "_", data$p, ".jpg")), "Latin-ASCII")

write_json(data, path="../data/data.json", na="null")
