build:
	docker build -t chat-front .
run:
	docker run -d -p 8080:8080 --rm --name chat-front chat-front
stop:
	docker stop chat-front