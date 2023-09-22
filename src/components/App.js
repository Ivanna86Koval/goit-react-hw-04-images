import { useState, useEffect } from 'react';
import { fetchSearch } from './api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { RootStyle } from './RootStyle/RootStyle.styled';
import { Bars } from 'react-loader-spinner';
import { Button } from './Button/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App =() => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loadMoreVisibility, setLoadMoreVisibility] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [maxPage, setMaxPage] = useState(null);
  const [perPage] = useState(12);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      if (!search) return;

      try {
        setSpinner(true);
        const result = await fetchSearch(search, page, perPage);
        const { hits, totalHits } = result;

        setImages((prevImages) => [...prevImages, ...hits]);
        setMaxPage(Math.ceil(totalHits / perPage));

        if (page === 1) {
          toast.success(`We found ${totalHits} photos.`, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      } catch (err) {
        setError(true);
        toast.error('Something went wrong. Please try again.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
        setSpinner(false);
      }
    };

    fetchData();
  }, [search, page, perPage]);

  const loadMore = () => {
    if (page >= maxPage) {
      toast.error('There are no more images for this request');
      setLoadMoreVisibility(true);
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const onGetSearch = (word) => {
    if (search !== word && word) {
      setSearch(word);
      setImages([]);
      setPage(1);
      setError(false);
    } else if (!word) {
      toast.info('Please fill in the search field', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

    return (
      <div>
        <Searchbar onSubmit={onGetSearch} />
        {spinner && (
          <Bars
  height={80}
  width={80}
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}/>
        )}
        <ImageGallery images={images} />
        {images.length > 0 && !loadMoreVisibility && (
          <Button loadMore={loadMore} />
        )}
        <ToastContainer />
        <RootStyle></RootStyle>
      </div>
    );
  }
