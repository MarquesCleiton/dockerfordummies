package br.com.marquescleiton.cadastrodememes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CadastrodememesApplication {

	public static void main(String[] args) throws InterruptedException {
		System.out.println("Aguardando 10 segundos");
		Thread.sleep(10000);
		SpringApplication.run(CadastrodememesApplication.class, args);
	}

}
