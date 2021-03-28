namespace API.Helpers
{
    public class MessageParams
    {
        private const int MaxPageSeize = 50;
        public int PageNumber { get; set; } = 1;
        public int _pageSize = 10;
        public int PageSize { 
            get => _pageSize;
            set => _pageSize = (value >  MaxPageSeize ? MaxPageSeize : value);
        } 

        public string Username { get; set; }
        public string Container { get; set; } = "Unread";
    }
}