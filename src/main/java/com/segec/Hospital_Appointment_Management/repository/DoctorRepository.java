package com.segec.Hospital_Appointment_Management.repository;

import com.segec.Hospital_Appointment_Management.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
}