
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL =
  "https://nafis-imtiaj-hossain-server-opal.vercel.app/api";

const ContactManage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =====================================
  // Get All Contacts
  // =====================================

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("adminToken");

      console.log("TOKEN FROM LOCAL STORAGE:", token);

      if (!token) {
        setError("Token not found. Please login again.");
        return;
      }

      const response = await axios.get(`${API_URL}/contact`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("CONTACT RESPONSE:", response.data);

      if (response.data.success) {
        setContacts(response.data.data);
      }
    } catch (error) {
      console.log("STATUS:", error.response?.status);
      console.log("BACKEND ERROR:", error.response?.data);

      setError(
        error.response?.data?.message || "Failed to load messages"
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================
  // Delete Contact
  // =====================================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("adminToken");

      const response = await axios.delete(
        `${API_URL}/contact/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setContacts((prevContacts) =>
          prevContacts.filter(
            (contact) => contact._id !== id
          )
        );
      }
    } catch (error) {
      console.log("Delete Error:", error);

      alert(
        error.response?.data?.message ||
          "Failed to delete message"
      );
    }
  };

  // =====================================
  // Load Contacts
  // =====================================

  useEffect(() => {
    fetchContacts();
  }, []);

  // =====================================
  // Loading
  // =====================================

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <p className="text-gray-500">Loading messages...</p>
      </div>
    );
  }

  // =====================================
  // Error
  // =====================================

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Contact Messages
        </h1>

        <p className="text-gray-500 mt-1">
          Messages received from your portfolio visitors.
        </p>
      </div>

      {/* Empty State */}

      {contacts.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <p className="text-gray-500">
            No contact messages found.
          </p>
        </div>
      ) : (
        /* Messages */

        <div className="space-y-5">
          {contacts.map((contact) => (
            <div
              key={contact._id}
              className="bg-white rounded-xl shadow-md p-6"
            >
              {/* Top */}

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {contact.subject}
                  </h2>

                  <p className="text-gray-600 mt-1">
                    From:{" "}
                    <span className="font-medium">
                      {contact.name}
                    </span>
                  </p>

                  <p className="text-gray-500 text-sm">
                    {contact.email}
                  </p>
                </div>

                {/* Delete */}

                <button
                  onClick={() => handleDelete(contact._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>

              {/* Message */}

              <div className="mt-5 bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 whitespace-pre-wrap">
                  {contact.message}
                </p>
              </div>

              {/* Date */}

              <p className="text-gray-400 text-sm mt-4">
                {contact.createdAt
                  ? new Date(
                      contact.createdAt
                    ).toLocaleString()
                  : "Date unavailable"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactManage;

