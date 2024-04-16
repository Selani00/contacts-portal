"use client";
import React, { useState, useEffect } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import PopUp from "../components/PopUp";
import { Contact } from "@/model/contact.model";

const Table = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/contact/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div style={{ maxHeight: "300px", overflowX: "auto" }}>
      <table className="min-w-full table-auto">
        <thead className="sticky top-0 bg-white">
          <tr>
            <th className="px-16 py-2">Pic</th>
            <th className="px-16 py-2">FullName</th>
            <th className="px-16 py-2">Phone</th>
            <th className="px-16 py-2">Email</th>
            <th className="px-16 py-2">Gender</th>
            <th className="px-16 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {contacts.map((contact, index) => (
            <ContactRow key={index} contact={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

function ContactRow({ contact }: { contact: Contact }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <tr className="text-center">
      <td className="px-8 py-2 flex flex-row items-center">
        {/* Display contact picture here */}
        <img src="#" alt="" />
      </td>
      <td className="px-8 py-2">{contact.fullName || "Unknown"}</td>
      <td className="px-8 py-2">{contact.phoneNumber || "Unknown"}</td>
      <td className="px-8 py-2">{contact.email || "Unknown"}</td>
      <td className="px-8 py-2">{contact.gender || "Unknown"}</td>
      <td className="px-8 py-2">
        <div className="flex items-center justify-center gap-1">
          <>
            <button
              className="bg-transparent text-main px-4 py-2 border rounded-md"
              onClick={() => setShowModal(true)}
            >
              <FaPen />
            </button>
            <PopUp isVisible={showModal} onClose={() => setShowModal(false)}>
              <div>
                <h3>Do you want to delete the contact?</h3>
                <button>Yes</button>
                <button onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </PopUp>
          </>
          <>
            <button className="bg-transparent text-main px-4 py-2 border rounded-md">
              <FaTrash />
            </button>
          </>
        </div>
      </td>
    </tr>
  );
}

export default Table;
