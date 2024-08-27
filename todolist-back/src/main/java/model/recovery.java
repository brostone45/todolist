package model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "recovery")
public class recovery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int recoveryCode;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getRecoveryCode() {
        return recoveryCode;
    }

    public void setRecoveryCode(int recoveryCode) {
        this.recoveryCode = recoveryCode;
    }

    @Override
    public String toString() {
        return "recovery{" +
                "id=" + id +
                ", recoveryCode=" + recoveryCode +
                '}';
    }
}
