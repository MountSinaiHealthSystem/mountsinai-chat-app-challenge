package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

type Message struct {
	Name   string `json:"name"`
	Text  string `json:"text"`
}

type JsonResponse struct {
	Data interface{} `json:"data"`
}

var messages []*Message

func sendJSON(w http.ResponseWriter, status int, data interface{}) {
	js := &JsonResponse{Data: data}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(js)
}

func GetMessages(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	sendJSON(w, http.StatusOK, &messages)
}

func CreateMessage(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	var message Message
	json.NewDecoder(r.Body).Decode(&message)
	messages = append(messages, &message)

	sendJSON(w, http.StatusOK, &message)
}

func main() {
    router := httprouter.New()

    router.GET("/api/getMessages", GetMessages)
    router.POST("/api/createMessage", CreateMessage)

    log.Fatal(http.ListenAndServe(":8080", router))
}
