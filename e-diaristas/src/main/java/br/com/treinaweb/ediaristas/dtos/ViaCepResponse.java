package br.com.treinaweb.ediaristas.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ViaCepResponse {
    
    private String cep;

    private String logradouro;

    private String uf;

    private String localidade;

    private String complemento;

    private String bairro;

    private String ibge;

    public String getCep() {
        return cep;
    }

    public String getIbge() {
        return ibge;
    }

    public void setIbge(String ibge) {
        this.ibge = ibge;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }
}
