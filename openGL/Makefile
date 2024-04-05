all: compile link install
	
compile: main.c
	gcc -fpic -c *.c  -I include/

link: main.o
	gcc -shared -o libGfx.so *.o -Llib -lGL -lglfw

install: libGfx.so
	mv libGfx.so ..

clean:
	rm ../libGfx.so
	rm main.o
