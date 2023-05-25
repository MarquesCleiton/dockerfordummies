package br.com.marquescleiton.dockerfordummies_api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @GetMapping("testedocker")
    public String testeDocker(){
        return "<marquee\n" +
                "  direction=\"down\"\n" +
                "  scrollamount=\"25\"\n" +
                "  width=\"100%\"\n" +
                "  height=\"100%\"\n" +
                "  behavior=\"alternate\"\n" +
                "  style=\"border:solid\">\n" +
                "  <marquee behavior=\"alternate\"> <h1> Faaaaaaala galerinha! </h1></marquee>\n" +
                "</marquee>";
    }
}
