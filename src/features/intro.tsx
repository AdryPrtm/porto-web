import { useGetProfileQuery } from "../store/apiSlice";
import { Intro } from "../components/intro";

export const IntroFeatures = () => {
  // 1. Mengganti nama `data` menjadi `profiles` agar lebih deskriptif
  const { data: profiles, isLoading, error } = useGetProfileQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <div>Error: {error.toString()}</div>;

  // 2. Mengambil data profil pertama dari array
  const profile = profiles?.[0];

  // 3. Menambahkan pengecekan jika data profil tidak ditemukan
  if (!profile) {
    return <p>No profile data found.</p>;
  }

  return (
    <div>
      <Intro
        name={profile.name}
        description={profile.bio}
        imageUrl={profile.profilePicture}
      />
    </div>
  );
};
