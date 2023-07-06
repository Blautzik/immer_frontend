export default function EventDetails({params}: any) { 
    return (
      <div className="min-h-screen items-center justify-center bg-white">
        <h1>This is Event details for ID {params.id}</h1>
      </div>
    );
}