package main

import(
	"net/http"
	"log"
	"html/template"
)

func home(w http.ResponseWriter, r *http.Request){
	t, _ := template.ParseFiles("index.html")
	t.Execute(w, "")
}
func loaded(w http.ResponseWriter, r *http.Request){
	t, _ := template.ParseFiles("loadedIndex.html")
	t.Execute(w, "")
}
func main(){
	fs := http.FileServer(http.Dir("static"))
	
	http.HandleFunc("/", home)
	http.HandleFunc("/index.html", loaded)
	http.Handle("/static/", http.StripPrefix("/static/", fs))
	err := http.ListenAndServe(":80", nil)
	
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
