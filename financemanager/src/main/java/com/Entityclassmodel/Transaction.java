package com.Entityclassmodel;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal amount;
    private LocalDate transactionDate;
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;  // Assuming you have a User entity class

    @Enumerated(EnumType.STRING)
    private TransactionType type;  // Enum for transaction types (e.g., INCOME, EXPENSE)

    // Constructors, Getters, and Setters
    public Transaction() {}

    public Transaction(BigDecimal amount, LocalDate transactionDate, String description, User user, TransactionType type) {
        this.amount = amount;
        this.transactionDate = transactionDate;
        this.description = description;
        this.user = user;
        this.type = type;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public LocalDate getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(LocalDate transactionDate) {
        this.transactionDate = transactionDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public TransactionType getType() {
        return type;
    }

    public void setType(TransactionType type) {
        this.type = type;
    }

    public enum TransactionType {
        INCOME, EXPENSE
    }
}
